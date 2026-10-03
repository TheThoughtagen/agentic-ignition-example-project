# Agentic Ignition Example Project

Minimal Ignition 8.3.9 project used by the [Agentic Ignition Stack](https://github.com/TheThoughtagen/agentic-ignition-stack) quickstart.

The stack Git module commissions this repository as Ignition project **`example-project`**. It is the only sample the stack boots and tests against.

## Layout notes (Ignition 8.3.9)

- Script-library **packages** (`testing/`, `starter/`) have no package-level `resource.json`. A resource with `"files": []` is treated as a leaf `ProjectScriptModule`, and child modules then fail to initialize.
- Leaf modules (`testing.runner`, `starter.status`, `starter.__tests__`, …) keep their own `resource.json` with `"files": ["code.py"]`.
- `starter/__tests__` is a sibling of `starter/status`, not a child of a `code.py` leaf. 8.3.9 does not ignore `__tests__`.
- Perspective `Home` is mapped to `/` so `/data/perspective/client/example-project` is a real session, not “View Not Found”.

## Tests (from the stack)

After bootstrap on a gateway with ignition-cli:

```bash
ign lint
# then the stack's project scan
ign testing run --project example-project
# Playwright in this repo's e2e/, targeting example-project
```

Git-module Gateway UI coverage lives in the stack repo's `e2e/`. This repo's Playwright smoke tests cover the Home view and Perspective session.

## License

Apache-2.0
