import { exec } from "child_process"
interface Result {
  error?: Error | null
  stdout?: string
  success: boolean
}
const startExec = (command: string): Promise<Result> => {
  return new Promise((resolve, reject) => {
    exec(command, async (error, stdout) => {
      if (error) {
        console.error(error)
        return reject({
          success: false,
          error
        })
      }
      if (stdout) {
        return resolve({
          success: true,
          stdout
        })
      }
      return resolve({
        success: true,
        stdout
      })
    })
  })
}


const execScript = async () => {
  console.log('start...')
  const check = await startExec('git status --porcelain')
  console.log(check, 'check')
  const name = (await startExec('git branch --show-current')).stdout?.trim() as string
  if (!check.success) return

  if (check.success && check.stdout) {
    await startExec('git stash')

  }

  console.log('切换到test')
  await startExec('git checkout -b test origin/develop')

  console.log(`切换到${name}`)
  await startExec(`git checkout -f ${name}`)

  console.log('删除test')
  await startExec('git branch -D test')

  console.log('释放')
  const pop = await startExec('git stash pop')

  console.log(pop, 'pop')
}
execScript()
