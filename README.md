# Nameste React
# Episode 1
# there are two ways to execute react one is 1. using the cdn link 2. using the npm
# Episode 2
# npm is a repository for all the packages
# npm it will manage all the package that will install in our project
# packages are also known as dependencies
# npm init ---> package.json will create (package.json is the configuration file for npm)
# we can install two types of packages or two types of dependencies 1. dev dependencies 2. normal dependencies.
# 1. used in development mode(npm install -D parcel) 2. used in the production mode(npm install parcel)
# install blundler ---> npm install -D parcel


# package.json npm init 
# package-lock.json and node modules npm install -D parcel
# ^2.12.0  -> upgrade minor version ( always kepp tild)
# ~2.12.0  -> upgrade major version
# node_modules it contains all the dependencies we want to build our project our project need to parcel .parcel is a project it has own dependencies we see lot of dependencies in node_module other than parcel it is called transetive dependency.
# every dependency has its own package.json( which contains the dependencies)
# no need to send the node_modules to the git it will auto generated . By using the npm install it will regenerate the node_modules.


# npx parcel index.html (starting our application) after execting this command we will get the dist and parcel-cache file
# npx is used to execute the package we have npx

# npm install react
# npm install react-dom



# parcel

# Dev Build
# local server
# HMR - Hot Module Replacement (file watching algorithm written in c++)
# faster Build (caching .parcel-cache)
   # we can regenerate the .parcel-cache and dist by rebuilding the app using the npx parcel index.html
# image minimization
# minification ( remove comments and extra spaces)
# compress
# Differential Building - support older Browser
# HTTPS build (parcel index.html --https)
# Diagnostic (error Handling)
# Tree Shaking (remove unused code)
# dev build npx parcel index.html and production build npx parcel build index.html (when we are doing the production build we need to remove the main in the package.json)minified files stored in the dist


# Browser List
# it will used to run our app in the browser
# "last 2 chrome version",
# "last 2 firefox version"