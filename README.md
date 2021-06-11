<p align="center">
  <img width="200" src="https://open-wc.org/hero.png"></img>
</p>

## Live Link

[My Live Link](https://dazzling-mestorf-140d18.netlify.app/)

## Travel App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Summary

Travel App is an application, that has been developed specifically for use on smaller devices, such as smartphones and tablets, that can be used by travellers to book and manage their **travel** whilst on the move.

The main purpose of developing the application was didactic. Several concepts of web development have been covered.

\- `Git` - dummy text

\- `HTML/CSS/JavaScript fundamentals` - dummy text

\- `API handling` - dummy text

\- `Routing` - dummy text

\- `Web Components` - dummy text

\- `Responsive Design` - dummy text

\- `Testing` - dummy text

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project

## API Interaction

The REST API to the app is described below.

## Get all places

### Request

  ```
  curl -X GET 'https://devschool-2020.firebaseio.com/radu/places.json'
  ```

### Response

  ```{
  "-MZy9zdT70VCzS-KFsit": {
    "description": "lorem ipsum",
    "imageUrl": "https://images.unsplash.com/photo-1563374958-65513ab4136b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "name": "Muntii Ciucas",
    "type": "nature"
  },
  "-MZyAD59b6YcGDY8Vy61": {
    "description": "lorem ipsum",
    "imageUrl": "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    "name": "Mamaia",
    "type": "seaside"
  },
  "-MZyAOTXgTn_m9QaEoRB": {
    "description": "lorem ipsum",
    "imageUrl": "https://images.unsplash.com/photo-1590565065301-1daa30a25f5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "name": "Sinaia",
    "type": "nature"
  }
}
  ```

## Get certain place

### Request

  ```
  curl -X GET 'https://devschool-2020.firebaseio.com/radu/places/placeId.json'
  ```

### Response

```
  {
  "description": "lorem ipsum",
  "imageUrl": "",
  "name": "Muntii Bucegi",
  "type": "nature"
}
```

## Create new place

### Request

  ``` 
    curl -X POST -d '{
    "name": "Bucuresti",
    "type": "city",
    "description": "lorem ipsum",
    "imageUrl": ""
    }' 'https://devschool-2020.firebaseio.com/radu/places.json'
  ```

### Response

  ```
  {
  "name": "-MZyG1CkMD1aMp4kbGw9"
  }
  ```

## Update place

### Request

  ``` 
    curl -X PUT -d '{
    "name": "Timisoara",
    "type": "city",
    "description": "lorem ipsum",
    "imageUrl": ""
    }' 'https://devschool-2020.firebaseio.com/radu/places/placeId.json'
  ```

### Response

  ```
  {
  "description": "lorem ipsum",
  "imageUrl": "",
  "name": "Timisoara",
  "type": "city"
 }
  ```

### Request

  ``` 
      curl -X PATCH -d '{
    "name": "Muntii Bucegi",
    "type": "nature",
    "description": "lorem ipsum",
      "imageUrl": ""
    }' 'https://devschool-2020.firebaseio.com/radu/places/placeId.json'
  ```

### Response

  ```
  {
  "name": "Muntii Bucegi",
  "type": "nature",
  "description": "lorem ipsum",
  "imageUrl": ""
}
  ```

## Delete certain place

### Request

  ``` 
    curl -X DELETE \
  'https://devschool-2020.firebaseio.com/radu/places/placeId.json'
  ```

### Response

  ```
  null
  ```

## Delete all places

### Request

  ``` 
    curl -X DELETE \
  'https://devschool-2020.firebaseio.com/radu/places.json'
  ```

### Response

  ```
  null
  ```