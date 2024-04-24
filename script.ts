import { exec } from "child_process"
import consola from 'consola'
import chalk from 'chalk'
import util from 'util'

interface Env {
  dev: Params,
  prod: Params
}

interface Params {
  name: string
}
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
    
    consola.info(chalk.blue(stdout, 'stdout'))
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
  const env: Env = {
    dev: {name: ''},
    prod: {name: ''}
  }

  env[process.env.NODE_ENV as string]
  consola.info(chalk.green(process.env.NODE_ENV, 'process.env.NODE_ENV!'))
  
  // consola.start(chalk.green('start...'))
  // const check = await startExec('git status --porcelain')
  // const name = (await startExec('git branch --show-current')).stdout?.trim() as string
  // if (!check.success) return

  // let isCache = false
  // if (check.success && check.stdout) {
  //   await startExec('git stash')
  //   isCache = true
  // }

  // consola.info(chalk.blue('change test branch'))
  // await startExec('git checkout -b test origin/develop')

  // consola.info(chalk.blue(`change ${name} branch`))
  // await startExec(`git checkout -f ${name}`)

  // consola.info(chalk.blue('delete test branch'))
  // await startExec('git branch -D test')

  // if (isCache) {
  //   consola.info(chalk.blue('release'))
  //   const pop = await startExec('git stash pop')
  //   consola.success(chalk.green(pop, 'pop'))
  //   consola.success(chalk.green('finish!'))
  // }
  // await startExec('git checkout -b test origin/develop').catch(err => {
  //   consola.info(chalk.red(err))
  //   return
  // })
  // const res = await startExec('git checkout -b test1 origin/develop')
  // consola.info(chalk.green(res, 'res'))
  // res.error?.toString().indexOf('')
  // await startExec('git checkout -b test origin/develop').then((res) => {
  //   consola.info(chalk.blue(res, 'testres'))
  // }, (err) => {
  //   consola.error(chalk.red(err, 'testerr'))
  // })
  // consola.info(chalk.white(a, 'a!'))
  consola.info(chalk.white('end!'))
  // await startExec('git checkout -b test origin/develop')
  // startExec('git checkout -b test origin/develop').then(res => {
  //   consola.info(chalk.green(res, 'res'))
  // }, (err) => {
  //   startExec('git stash pop')
  //   consola.error(chalk.bgBlue(err.success, 'err.success'))
  //   consola.error(chalk.bgBlue(err.error, 'err.error'))
  //   consola.error(chalk.bgBlue(err.stdout, 'err.stdout'))
  // })
}
execScript()
