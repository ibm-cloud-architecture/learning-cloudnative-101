#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis.ibm.com"
  git config --global user.name "Travis CI"
}

commit_html_files() {
  if [ "git branch --list gh-pages" ]
  then
    echo "Branch name gh-pages already exists."
    git remote add origin-pages https://${GH_USER}:${GH_TOKEN}@github.ibm.com/CASE/cloudnative-bootcamp.git > /dev/null 2>&1
    git push origin-pages --delete gh-pages
  fi
  git checkout -b gh-pages
  git rm -r *.adoc
  git rm -r travis
  git rm README.md
  git rm .travis.yml
  git add .
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_html_files() {
  git fetch
  git push --quiet --set-upstream origin-pages gh-pages
}

setup_git
commit_html_files
upload_html_files
