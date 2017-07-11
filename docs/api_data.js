define({ "api": [
  {
    "type": "post",
    "url": "/auth/jwt",
    "title": "JWT auth",
    "name": "PostAuthJwt",
    "group": "Auth",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User fields</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Authenticate to APi using JWT</p>",
    "filename": "src/endpoints/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/beers/:id",
    "title": "Delete single",
    "name": "DeleteBeer",
    "group": "Beers",
    "version": "1.0.0",
    "description": "<p>Delete a Beer by its ID in database.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "src/endpoints/beers.js",
    "groupTitle": "Beers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Beer.id",
            "description": "<p>record id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Beer.brewery_id",
            "description": "<p>id of related brewery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.cat_id",
            "description": "<p>id of related category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.style_id",
            "description": "<p>id of related style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.abv",
            "description": "<p>Alchool by volume value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.ibu",
            "description": "<p>International Bitterness Units</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.srm",
            "description": "<p>Standard Reference Method</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.upc",
            "description": "<p>Universal Product Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.descript",
            "description": "<p>Description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/beers/:id",
    "title": "Get single",
    "name": "GetBeer",
    "group": "Beers",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Beer",
            "description": "<p>Beer response object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Beer.id",
            "description": "<p>record id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Beer.brewery_id",
            "description": "<p>id of related brewery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.cat_id",
            "description": "<p>id of related category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.style_id",
            "description": "<p>id of related style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.abv",
            "description": "<p>Alchool by volume value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.ibu",
            "description": "<p>International Bitterness Units</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.srm",
            "description": "<p>Standard Reference Method</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.upc",
            "description": "<p>Universal Product Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.descript",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "description": "<p>Get a Beer by its ID in database.</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "src/endpoints/beers.js",
    "groupTitle": "Beers"
  },
  {
    "type": "get",
    "url": "/beers",
    "title": "Get list",
    "name": "GetBeers",
    "group": "Beers",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Beer",
            "description": "<p>list of beer response objects</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Beer.id",
            "description": "<p>record id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Beer.brewery_id",
            "description": "<p>id of related brewery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.cat_id",
            "description": "<p>id of related category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.style_id",
            "description": "<p>id of related style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.abv",
            "description": "<p>Alchool by volume value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.ibu",
            "description": "<p>International Bitterness Units</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.srm",
            "description": "<p>Standard Reference Method</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.upc",
            "description": "<p>Universal Product Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.descript",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "description": "<p>Get a list of beers, use filtering and ordering to query precisely.</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "src/endpoints/beers.js",
    "groupTitle": "Beers"
  },
  {
    "type": "get",
    "url": "/beers/count",
    "title": "Get count",
    "name": "GetBeersCount",
    "group": "Beers",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>number of beers</p>"
          }
        ]
      }
    },
    "description": "<p>Get the total number of beers in database.</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "src/endpoints/beers.js",
    "groupTitle": "Beers"
  },
  {
    "type": "get",
    "url": "/beers/search/:query",
    "title": "Search list",
    "name": "GetSearchBeers",
    "group": "Beers",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Beer",
            "description": "<p>Beer response object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Beer.id",
            "description": "<p>record id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Beer.brewery_id",
            "description": "<p>id of related brewery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.cat_id",
            "description": "<p>id of related category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.style_id",
            "description": "<p>id of related style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.abv",
            "description": "<p>Alchool by volume value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.ibu",
            "description": "<p>International Bitterness Units</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.srm",
            "description": "<p>Standard Reference Method</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.upc",
            "description": "<p>Universal Product Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.descript",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "description": "<p>Search for a beer, you can use ordering and pagination here.</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "filename": "src/endpoints/beers.js",
    "groupTitle": "Beers"
  },
  {
    "type": "post",
    "url": "/beers/:id",
    "title": "Add single",
    "name": "PostBeer",
    "group": "Beers",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Beer",
            "description": "<p>Beer response object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Beer.id",
            "description": "<p>record id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Beer.brewery_id",
            "description": "<p>id of related brewery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.cat_id",
            "description": "<p>id of related category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.style_id",
            "description": "<p>id of related style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.abv",
            "description": "<p>Alchool by volume value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.ibu",
            "description": "<p>International Bitterness Units</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.srm",
            "description": "<p>Standard Reference Method</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.upc",
            "description": "<p>Universal Product Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.descript",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "description": "<p>Add a new Beer to the database</p> <p>returns the added object if it succeded.</p>",
    "permission": [
      {
        "name": "admin contributor"
      }
    ],
    "filename": "src/endpoints/beers.js",
    "groupTitle": "Beers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Beer name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cat_id",
            "description": "<p>Associated category id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "brewery_id",
            "description": "<p>Associated Brewery ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "style_id",
            "description": "<p>Associated style id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "abv",
            "description": "<p>Alchool by volume value</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ibu",
            "description": "<p>International Bitterness Units</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "srm",
            "description": "<p>Standard Reference Method</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "upc",
            "description": "<p>Universal Product Code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "descript",
            "description": "<p>Beer description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/beers/:id",
    "title": "Update single",
    "name": "PutBeer",
    "group": "Beers",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Beer",
            "description": "<p>Beer response object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Beer.id",
            "description": "<p>record id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Beer.brewery_id",
            "description": "<p>id of related brewery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.cat_id",
            "description": "<p>id of related category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.style_id",
            "description": "<p>id of related style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.abv",
            "description": "<p>Alchool by volume value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.ibu",
            "description": "<p>International Bitterness Units</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.srm",
            "description": "<p>Standard Reference Method</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.upc",
            "description": "<p>Universal Product Code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Beer.descript",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "description": "<p>Update a Beer fields by its ID,</p> <p>returns the modified Beer in case of success.</p>",
    "permission": [
      {
        "name": "admin contributor"
      }
    ],
    "filename": "src/endpoints/beers.js",
    "groupTitle": "Beers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Beer name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cat_id",
            "description": "<p>Associated category id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "brewery_id",
            "description": "<p>Associated brewery id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "style_id",
            "description": "<p>Associated style id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "abv",
            "description": "<p>Alchool by volume value</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ibu",
            "description": "<p>International Bitterness Units</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "srm",
            "description": "<p>Standard Reference Method</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "upc",
            "description": "<p>Universal Product Code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "descript",
            "description": "<p>Beer description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/breweries/:id",
    "title": "Delete single",
    "name": "DeleteBreweryId",
    "group": "Breweries",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Delete a Brewery from database (this does not delete location or beers related to this brewery and does not updates fields, use it with caution).</p>",
    "filename": "src/endpoints/breweries.js",
    "groupTitle": "Breweries",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.id",
            "description": "<p>id of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.name",
            "description": "<p>Name of this brewery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.address1",
            "description": "<p>First address line</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.address2",
            "description": "<p>Second address line</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.state",
            "description": "<p>State (if applicable)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.code",
            "description": "<p>ZIP code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.phone",
            "description": "<p>Phone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.website",
            "description": "<p>Website</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.descript",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Brewery.BreweryGeocode",
            "description": "<p>Geocode related object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Brewery.Beers",
            "description": "<p>Beers that belong to this brewery</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/breweries/count",
    "title": "Get count",
    "name": "GetBreweriesCount",
    "group": "Breweries",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>number of breweries</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get the total number of Breweries in database.</p>",
    "filename": "src/endpoints/breweries.js",
    "groupTitle": "Breweries"
  },
  {
    "type": "get",
    "url": "/breweries",
    "title": "Get list",
    "name": "GetBrewery",
    "group": "Breweries",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Brewery",
            "description": "<p>Brewery response object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.id",
            "description": "<p>id of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.name",
            "description": "<p>Name of this brewery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.address1",
            "description": "<p>First address line</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.address2",
            "description": "<p>Second address line</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.state",
            "description": "<p>State (if applicable)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.code",
            "description": "<p>ZIP code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.phone",
            "description": "<p>Phone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.website",
            "description": "<p>Website</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.descript",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Brewery.BreweryGeocode",
            "description": "<p>Geocode related object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Brewery.Beers",
            "description": "<p>Beers that belong to this brewery</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get a list of breweries, you can use ordering and pagination here.</p>",
    "filename": "src/endpoints/breweries.js",
    "groupTitle": "Breweries"
  },
  {
    "type": "get",
    "url": "/breweries/:id",
    "title": "Get single",
    "name": "GetBreweryId",
    "group": "Breweries",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Brewery",
            "description": "<p>Brewery response object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.id",
            "description": "<p>id of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.name",
            "description": "<p>Name of this brewery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.address1",
            "description": "<p>First address line</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.address2",
            "description": "<p>Second address line</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.state",
            "description": "<p>State (if applicable)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.code",
            "description": "<p>ZIP code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.phone",
            "description": "<p>Phone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.website",
            "description": "<p>Website</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.descript",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Brewery.BreweryGeocode",
            "description": "<p>Geocode related object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Brewery.Beers",
            "description": "<p>Beers that belong to this brewery</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get a single Brewery from database</p>",
    "filename": "src/endpoints/breweries.js",
    "groupTitle": "Breweries"
  },
  {
    "type": "get",
    "url": "/breweries/search/:query",
    "title": "Search list",
    "name": "GetSearchBreweries",
    "group": "Breweries",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Search query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Brewery",
            "description": "<p>Brewery response object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.id",
            "description": "<p>id of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.name",
            "description": "<p>Name of this brewery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.address1",
            "description": "<p>First address line</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.address2",
            "description": "<p>Second address line</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Brewery.city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.state",
            "description": "<p>State (if applicable)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.code",
            "description": "<p>ZIP code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.phone",
            "description": "<p>Phone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.website",
            "description": "<p>Website</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Brewery.descript",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Brewery.BreweryGeocode",
            "description": "<p>Geocode related object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Brewery.Beers",
            "description": "<p>Beers that belong to this brewery</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Search for breweries by their names.</p>",
    "filename": "src/endpoints/breweries.js",
    "groupTitle": "Breweries"
  },
  {
    "type": "delete",
    "url": "/breweries-locations/:brewery_id",
    "title": "Delete single",
    "name": "DeleteBreweriesLocation",
    "group": "BreweriesLocations",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Delete a Brewery Location from database (this does not delete associated brewery and does not update brewery_location_id field , use it with caution).</p>",
    "filename": "src/endpoints/breweries-geocodes.js",
    "groupTitle": "BreweriesLocations"
  },
  {
    "type": "get",
    "url": "/breweries-locations",
    "title": "Get list",
    "name": "GetBreweriesLocations",
    "group": "BreweriesLocations",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "BreweryGeocode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.id",
            "description": "<p>id of this location item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.brewery_id",
            "description": "<p>brewery id for this location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.latitude",
            "description": "<p>latitude value</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.longitude",
            "description": "<p>longitude value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "BreweryGeocode.accuracy",
            "description": "<p>type of accuracy for the measurement</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get a list of Breweries, you can use ordering and pagination here.</p>",
    "filename": "src/endpoints/breweries-geocodes.js",
    "groupTitle": "BreweriesLocations"
  },
  {
    "type": "get",
    "url": "/breweries-locations/count",
    "title": "Get count",
    "name": "GetBreweriesLocationsCount",
    "group": "BreweriesLocations",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>number of breweries-locations</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get the total number of breweries-locations in database</p>",
    "filename": "src/endpoints/breweries-geocodes.js",
    "groupTitle": "BreweriesLocations"
  },
  {
    "type": "get",
    "url": "/breweries-locations/:brewery_id",
    "title": "Get single",
    "name": "GetBreweriesLocationsId",
    "group": "BreweriesLocations",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "bars",
            "description": "<p>Set to true if you want to find close bars</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "BreweryGeocode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.id",
            "description": "<p>id of this location item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.brewery_id",
            "description": "<p>brewery id for this location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.latitude",
            "description": "<p>latitude value</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.longitude",
            "description": "<p>longitude value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "BreweryGeocode.accuracy",
            "description": "<p>type of accuracy for the measurement</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get a single Brewery Location record.</p>",
    "filename": "src/endpoints/breweries-geocodes.js",
    "groupTitle": "BreweriesLocations"
  },
  {
    "type": "get",
    "url": "/breweries-locations/near",
    "title": "Get near breweries",
    "name": "GetBreweriesLocationsNear",
    "group": "BreweriesLocations",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Center latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Center longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "distance",
            "description": "<p>Radius from center point (in KM)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "bars",
            "description": "<p>Should include bars around breweries or not</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "BreweryGeocode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.id",
            "description": "<p>id of this location item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.brewery_id",
            "description": "<p>brewery id for this location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.latitude",
            "description": "<p>latitude value</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.longitude",
            "description": "<p>longitude value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "BreweryGeocode.accuracy",
            "description": "<p>type of accuracy for the measurement</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get the nearest breweries-locations withing a radius of distance (in km) at given GPS coordinates (includes brewery name).</p>",
    "filename": "src/endpoints/breweries-geocodes.js",
    "groupTitle": "BreweriesLocations"
  },
  {
    "type": "post",
    "url": "/breweries-locations",
    "title": "Add single",
    "name": "PostBreweriesLocation",
    "group": "BreweriesLocations",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "BreweryGeocode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.id",
            "description": "<p>id of this location item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.brewery_id",
            "description": "<p>brewery id for this location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.latitude",
            "description": "<p>latitude value</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.longitude",
            "description": "<p>longitude value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "BreweryGeocode.accuracy",
            "description": "<p>type of accuracy for the measurement</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin contributor"
      }
    ],
    "description": "<p>Add a new Brewery Location to database.</p>",
    "filename": "src/endpoints/breweries-geocodes.js",
    "groupTitle": "BreweriesLocations"
  },
  {
    "type": "put",
    "url": "/breweries-locations/:brewery_id",
    "title": "Update single",
    "name": "PutBreweriesLocation",
    "group": "BreweriesLocations",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "BreweryGeocode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.id",
            "description": "<p>id of this location item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.brewery_id",
            "description": "<p>brewery id for this location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.latitude",
            "description": "<p>latitude value</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "BreweryGeocode.longitude",
            "description": "<p>longitude value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "BreweryGeocode.accuracy",
            "description": "<p>type of accuracy for the measurement</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin, contributor"
      }
    ],
    "description": "<p>Update a Brewery Location in database.</p>",
    "filename": "src/endpoints/breweries-geocodes.js",
    "groupTitle": "BreweriesLocations"
  },
  {
    "type": "post",
    "url": "/breweries",
    "title": "Add single",
    "name": "PostBrewery",
    "group": "Breweries",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin contributor"
      }
    ],
    "description": "<p>Add a new Brewery to database.</p>",
    "filename": "src/endpoints/breweries.js",
    "groupTitle": "Breweries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Brewery name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address1",
            "description": "<p>Address line 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address2",
            "description": "<p>Address line 2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>State</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>ZIP code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>Link to website</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Brewery description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/breweries",
    "title": "Update single",
    "name": "PutBrewery",
    "group": "Breweries",
    "version": "1.0.0",
    "permission": [
      {
        "name": "admin contributor"
      }
    ],
    "description": "<p>Update a single Brewery in database.</p>",
    "filename": "src/endpoints/breweries.js",
    "groupTitle": "Breweries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Brewery name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address1",
            "description": "<p>Address line 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address2",
            "description": "<p>Address line 2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>State</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>ZIP code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>Link to website</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Brewery description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get single - by id",
    "name": "GetUserById",
    "group": "Users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "User.id",
            "description": "<p>id of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.username",
            "description": "<p>Username (unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.email",
            "description": "<p>Email (unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.role",
            "description": "<p>role (user|contributor|admin)</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Get user informations by its id.</p>",
    "filename": "src/endpoints/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/name/:username",
    "title": "Get single - by username",
    "name": "GetUserByUsername",
    "group": "Users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "User.id",
            "description": "<p>id of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.username",
            "description": "<p>Username (unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.email",
            "description": "<p>Email (unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.role",
            "description": "<p>role (user|contributor|admin)</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Get user informations by its username.</p>",
    "filename": "src/endpoints/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get list",
    "name": "GetUsers",
    "group": "Users",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "User",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "User.id",
            "description": "<p>id of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.username",
            "description": "<p>Username (unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.email",
            "description": "<p>Email (unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.role",
            "description": "<p>role (user|contributor|admin)</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Get a list of users, you can use pagination and ordering here.</p>",
    "filename": "src/endpoints/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/count",
    "title": "Get count",
    "name": "GetUsersCount",
    "group": "Users",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>number of users</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Get total count of users</p>",
    "filename": "src/endpoints/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create single",
    "name": "PostUser",
    "group": "Users",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>Created user informations</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "User.id",
            "description": "<p>id of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.username",
            "description": "<p>Username (unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.email",
            "description": "<p>Email (unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.role",
            "description": "<p>role (user|contributor|admin)</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Create your user account</p>",
    "filename": "src/endpoints/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/(:id|me)",
    "title": "Update single",
    "name": "PutUser",
    "group": "Users",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>Updated user informations</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "User.id",
            "description": "<p>id of the record</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.username",
            "description": "<p>Username (unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.email",
            "description": "<p>Email (unique)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.role",
            "description": "<p>role (user|contributor|admin)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id (replace by &quot;me&quot; to edit your profile)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Updated username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Updated email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Updated password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>Updated role</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "user admin"
      }
    ],
    "description": "<p>Update User informations by its ID, if it's your ID, you don't need admin permissions.</p>",
    "filename": "src/endpoints/users.js",
    "groupTitle": "Users"
  }
] });
