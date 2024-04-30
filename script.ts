import { exec } from "child_process"
import consola from 'consola'
import chalk from 'chalk'
import util from 'util'

interface Result {
  success: boolean
  error?: string | Buffer
  stdout?: string
}
// 使用 util.promisify 将 exec 转换为返回 Promise 的函数
const execPromise = util.promisify(exec);

const startExec = async (command: string): Promise<Result> => {

  try {
    const { stdout, stderr } = await execPromise(command);
    // console.log('stdout:', stdout);
    
    return {
      success: true,
      stdout
    }
  } catch (error) {
    consola.error(chalk.red(error, 'error'))
    return {
      success: false,
      error: error
    }
  }
}


const execScript = async () => {
  
  consola.start(chalk.green('start...'))
  const check = await startExec('git status --porcelain')
  const name = (await startExec('git branch --show-current')).stdout?.trim() as string
  if (!check.success) return

  let isCache = false
  if (check.success && check.stdout) {
    await startExec('git stash -u')
    isCache = true
  }

  consola.info(chalk.blue('change test branch'))
  await startExec('git checkout -b test origin/test')

  await startExec('pnpm run build')

  consola.info(chalk.blue(`change ${name} branch`))
  await startExec(`git checkout -f ${name}`)

  consola.info(chalk.blue('delete test branch'))
  await startExec('git branch -D test')

  if (isCache) {
    consola.info(chalk.blue('release'))
    await startExec('git stash pop')
    consola.success(chalk.green('finish!'))
  }

}
execScript()
