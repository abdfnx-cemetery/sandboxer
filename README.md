<div align="center">
    <img
      src="./assets/rbsb.svg"
      alt="RestBox SandBoxer"
      height="60"
    />
</div>
<div align="center">

# RestBox Sandboxer

</div>

a JavaScript sandbox for executing various security sensitive external scripts.

> This package makes use of [quickjs-empscripten](https://npm.im/quickjs-emscripten) for building sandboxes for running external code on RestBox.

Currently implemented sandboxes:

- **RestBox** Test Scripts
- **RestBox** Pre Request Scripts

## Development

1. Clone the repository

```bash
# git
git clone https://github.com/restbox/sandboxer

# github cli
gh repo clone restbox/sandboxer
```

2. Install dependencies

```
yarn
```

3. Run `demo` command

```
yarn demo
```
