const path = require('path')
const fs = require('fs')
const requireFromString = require('require-from-string')

const leetCodeRootPath = path.join(__dirname, "node_modules", "vsc-leetcode-cli");

const companiesTagsPath = path.join(leetCodeRootPath, "lib", "plugins", "company.js");
const companiesTagsSrc = (fs.readFileSync(companiesTagsPath, "utf8")).replace(
    "module.exports = plugin",
    "module.exports = { COMPONIES, TAGS }",
);
const { TAGS } = requireFromString(companiesTagsSrc, companiesTagsPath);

function isNumeric(value) {
  return /^\d+$/.test(value);
}

const completeQuestionMap = fs.readdirSync('./').reduce((pre, cur) => {
  const number = cur.split('.')[0]
  if (isNumeric(number)) {
    pre.set(number, cur)
  }
  return pre
}, new Map())

const tagsMap = new Map()

for(const problemId in TAGS) {
  const tags = TAGS[problemId]
  for(const tag of tags) {
    if (tagsMap.has(tag)) {
      tagsMap.set(tag, [...tagsMap.get(tag), problemId])
    } else {
      tagsMap.set(tag, [problemId])
    }
  }
}

function addQuestionLink(no) {
  if (completeQuestionMap.has(no)) {
    return `[${no}](${completeQuestionMap.get(no)})`
  } else {
    return no
  }
}

function generateReadMe(tags) {
  let str = '#classfication\n\n'

  for(const item of tags) {
    str = str + '## ' + item[0] + '\n\n'
    str = str + item[1].reduce((pre, cur, index, arr) => {
      const isLast = arr.length - 1 === index
      return pre + addQuestionLink(cur) + (!isLast ? ', ' : '')
    }, '')
    str = str + '\n\n'
  }
  
  return str
}

fs.writeFileSync('README.md', generateReadMe(tagsMap))