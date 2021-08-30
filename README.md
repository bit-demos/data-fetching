# Data Fetching in Bit

Example on how to use a hook to fetch data in Bit.

https://user-images.githubusercontent.com/13063165/131359221-ccf3f9d1-a0be-4831-841f-9e2d287a84f3.mp4


Components are hosted [here](https://bit.dev/learn-bit-react/data-fetching)

If you would like to import(clone) the project to take it for a test run make sure you have [bit installed](https://harmony-docs.bit.dev/getting-started/installing-bit).

```bash
npm i -g @teambit/bvm
bvm install
```

Note: You can also use git to clone this project and test it out. However if you want to use this as a base project that you can then export to your own remote scope use the method below.

Create an empty workspace. (skip this step if you want to import the components into an already created workspace)

```bash
bit new react my-workspace --empty
```

Use the `bit import` command to import all components into your workspace. This is similar to cloning a project.

```bash
bit import "learn-bit-react.data-fetching/*"
```

Copy the `workspace.jsonc` file from this repository and replace the one in your workspace. This will ensure you have the correct dependencies and environments set.

Start the dev server

```bash
bit start
```

You should now see all the ecommerce components on [localhost:3000](http://localhost:3000)
