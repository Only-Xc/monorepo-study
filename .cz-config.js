module.exports = {
  // type 类型（定义之后，可通过上下键选择）
  types: [
    { value: 'feat', name: 'feat     : 新功能' },
    { value: 'fix', name: 'fix      : BUG 修复' },
    { value: 'perf', name: 'perf     : 性能优化' },
    { value: 'style', name: 'style    : 代码格式化(只是代码美化不影响功能)' },
    { value: 'docs', name: 'docs     : 仅文档更改' },
    { value: 'refactor', name: 'refactor : 代码重构（不包括 feat 和 fix）' },
    { value: 'chore', name: 'chore    : 对构建过程或辅助工具和库的更改' },
    { value: 'revert', name: 'revert   : 回滚 Commit' },
    { value: 'wip', name: 'wip      : 正在进行的工作' },
  ],

  // 交互提示信息
  messages: {
    type: '选择提交类型：',
    scope: '\n选择影响的 Scope （可选）：',
    customScope: '请输入自定义的 Scope：',
    subject: '请输入简短的变更描述：\n',
    body: '请输入详细的变更描述 （可选）。使用 "|" 进行换行：\n',
    breaking: '请列出 BREAKING CHANGES （可选）：\n',
    footer: '请列出相关的 ISSUES CLOSED (optional)。例如: #31， #34：\n',
    confirmCommit: '确认提交？',
  },

  allowBreakingChanges: ['feat', 'fix'], // type 选择了其中某项时，才询问 breaking message
  skipQuestions: ['body', 'footer'], // 想要跳过的询问步骤

  subjectLimit: 100, // 限制 subject 长度
  breaklineChar: '|', // 支持 body 和 footer
}
