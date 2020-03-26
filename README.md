
<h1 align="center">
IBM Cloud Native Bootcamp
</h1>

<p align="left">
    <a href="https://github.com/ibm-cloud-architecture/learning-cloudnative-101/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="The Cloud Native Bootcamp is released under the Apache-2.0 license" />
    <a href="https://travis-ci.org/github/ibm-cloud-architecture/learning-cloudnative-101"><img src="https://travis-ci.org/ibm-cloud-architecture/learning-cloudnative-101.svg?branch=master" alt="Travis"></a>
  </a>
</p>

## Cloud Native Bootcamp

This course is designed to enable developers with the latest tools and techniques for developing cloud native applications.

The course materials can be viewed at- [https://ibm-cloud-architecture.github.io/learning-cloudnative-101/](https://ibm-cloud-architecture.github.io/learning-cloudnative-101/)


```
git clone
```

### Install dependencies

```
npm install
```

### Local Development

After forking the repository, you can run your changes locally using the following:

```
npm run dev
```

You can access your local changes via [localhost:8000](http://localhost:8000).

### Publish Content

Currently, the content is published to the GitHub pages site through the `gh-pages` branch
using the `gh-pages` npm module. All of the details for handling the publishing are covered within
the deploy script. The deploy can be run using the following:

```
npm run deploy
```

**Note:** There is a time delay between when the deploy process completes and when the
content is available on the published site.

### Contributors

- Hemankita Perabathini (hemankita.perabathini@ibm.com)
- Bryan Kribbs (bakribbs@us.ibm.com)
- Carlos Santana (csantana@us.ibm.com)
- Matt Oberlin (mao@us.ibm.com)
