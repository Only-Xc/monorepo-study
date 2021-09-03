# 介绍

项目采用 monorepo 的方式管理，配置了 ESLint、Prettier、StyleLint 代码格式化工具。

使用 `lint-staged` 对提交的代码进行格式化。对 Commit Message 进行了规范化检查（Angular 提交规范）。

Monorepo 的使用会涉及到两个新知识点：

- `yarn workspace` yarn 的工作区，可以一次性对多个指定包进行管理
- `lerna` lerna 是用来对 monorepo 仓库对一种管理工具

对这两个东西不熟悉的需要先去了解一下。

项目中每一个提交都对应了一项配置，学习的可以一步一步看。并且更详细的说明写在了语雀文档里：

[Monorepo 项目管理方式](https://www.yuque.com/docs/share/26e55412-ec81-4673-8952-814d89b50b77?# 《Monorepo 项目管理方式》)

### 插件安装

- `EditorConfig for VS Code` 使 `.editorconfig` 配置生效
- `ESLint` 使 ESLint 生效
- `Prettier - Code formatter` 使 Prettier 生效
- `stylelint` 使 stylelint 生效

## 使用说明

项目进行了完整的工程化配置，拉取之后对配置进行稍微修改即可使用。

### 项目拉取

由于平台的不同，Window 下换行符使用的是 CRLF，而 Linux 下使用的是 LF。在开发时 ESLint 就会出现很多错误。

所以 Window 在拉取前需要对 Git 进行一些简单的设置：

```sh
# 修改 git 全局配置，禁止 git 自动将 lf 转换成 crlf
git config --global core.autocrlf false
```

这样设置完成之后，再拉取就不会出现 ESLint 检查错误的情况了。

### 依赖安装

```bash
$ yarn postinstall
$ yarn && lerna bootstrap
```

### 代码规范自动格式化配置

在仓库中配置了 eslint（代码规范）、stylelint（样式规范）、commitlint（git 提交规范）等规范。

在编码时需要依靠一些插件使其能自动格式化代码：

- `EditorConfig for VS Code` 使 `.editorconfig` 配置生效
- `ESLint` 使 ESLint 生效
- `Prettier - Code formatter` 使 Prettier 生效
- `stylelint` 使 stylelint 生效

> stylelint 在格式化时可能会出现**乱行问题**，只需要撤销再保存，重复 1-2 次即可。

### 代码提交规范

项目使用了 husky 、commitlint 对提交信息进行检查。

commit message 我们采用的是 angular 的提交规范，我们需要先全局安装 commitizen 插件，安装完成之后可以使用 `git cz` 进行规范化提交：

```bash
$ npm install commitizen -g
```

也可以使用 `git-commit-plugin`（Vscode 插件）快速创建提交信息。

### 项目开发

#### 依赖安装

首先要运行下面两个命令安装依赖

```sh
$ yarn postinstall
$ yarn && lerna bootstrap
```

#### 项目创建

可以使用 lerna 的命令进行一个项目的创建，也可以手动来创建一个项目。

```
lerna create xxx
```

```
cd packages
vue create xxx
```
