#!/usr/bin/env node

const clone = require('git-clone')
const program = require('commander')
const shell = require('shelljs');
const log = require('tracer').colorConsole()

console.log('my first cli');
program
    .version('1.0.0')
    .description('nsc中间件应用模板工程的cli')
program
    .command('* <tpl> <project>')
    .action(function(tpl, project) {
        log.info('目前nsc-cli支持以下模板：')
        log.info('使用例子：n-cli nsc-koa myproject')
        if (tpl && project) {
            let pwd = shell.pwd();
            log.info(`tpl:${tpl},project:${project},pwd:${pwd}`)
            log.info(`正在拉取模板代码，下载位置：${pwd}/${project}/ ...`);
            clone(`https://github.com/NorthSeacoder/${tpl}.git`, pwd + `/${project}`, null, function(err) {
                console.log(err)

                shell.rm('-rf', pwd + `/${project}/.git`);
                log.info('模板工程建立完成')
            })
        } else {
            log.info('正确命令例子：n-cli nsc-koa myproject')
        }
    })
program.parse(process.argv)
