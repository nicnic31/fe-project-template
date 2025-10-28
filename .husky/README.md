# Husky Git Hooks

This directory contains Git hooks managed by Husky to ensure code quality.

## Active Hooks

### pre-commit

Runs `lint-staged` which automatically:

- Formats code with Prettier
- Lints code with ESLint
- Fixes auto-fixable issues

Only staged files are checked and modified.

### commit-msg

Validates that commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(optional scope): <description>
```

**Allowed types**: feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert

## Bypassing Hooks (Emergency Only)

If you need to bypass the hooks in an emergency:

```bash
# Skip pre-commit hook
git commit --no-verify -m "emergency fix"

# Or use the short flag
git commit -n -m "emergency fix"
```

⚠️ **Warning**: Only use this in emergencies. All code should pass quality checks before being committed.

## Troubleshooting

### Hooks not running?

1. Make sure you've run `yarn install` (this runs the `prepare` script)
2. Check that `.husky` directory exists
3. Verify hooks have execute permissions: `chmod +x .husky/*`

### Hook failing?

1. Run `yarn format` to fix formatting issues
2. Run `yarn lint` to see linting errors
3. Fix any errors manually if auto-fix doesn't work
