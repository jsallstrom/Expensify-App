# Git Commans

git init - Crewate a new git repo
git status - View changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - check recent commits

# Change "origin" of your GIT repository

git remote rm origin
git remote add origin git@github.com:aplikacjainfo/proj1.git (Add name here of ypur new repo)
git config master.remote origin
git config master.merge refs/heads/master
git push
