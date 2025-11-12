# 1. Building The Landing Page In Next.js
## 1.1. Fetching Data from Strapi

# Endpoint Query Parameters:
```ts
{
  populate:{
    blocks:{
      on:{
        "blocks.hero-section":{
          populate:{
            image:{
              fields:[ "url", "alternativeText" ]
            },
            cta:true
          }
        }
      }
    }
  }
}
```
# Query String URL:
```
/api/home-page?populate[blocks][on][blocks.hero-section][populate][image][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][cta]=true

```