#!/usr/bin/env node

import process from 'node:process'
import path from 'node:path'
import {promises, createWriteStream} from 'node:fs'
import {promisify} from 'node:util'
import child_process from 'node:child_process'

const {ENV_INCLUDE} = process.env

const vals = ENV_INCLUDE.split(' ')
const envs = vals.map(v => `envs.${v} = '${process.env?.[v]}'`)

const template = `
	const envs = {}
	${envs.join('\n')}
	export default envs
`

console.log(template)

process.exit(0)
