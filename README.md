# Push Protocol HIRING CHALLENGE

## DEMO

![](https://github.com/hrithik73/PushTask/blob/main/docs/demo.mov)

**Description:**

The challenge is to build a mobile that displays and showcases the **DeGod NFT collections.** Read more about the DeGod NFTs **[HERE](https://opensea.io/collection/degods).**

This NFT collection includes around 8943 different items(NFTs). A specific individual item in the collection looks like **[this](https://opensea.io/assets/ethereum/0x8821bee2ba0df28761afff119d66390d594cd280/8522)**

What do you need to DO?

In a nutshell, your task is to initiate an API call to fetch this data. The Token IDs that represent each NFT can range from 1 to 8943.
Following is the CURL example:

## **Intended Behaviour of the Mobile App:**

- Display the NFT collection as a list with at least the following attributes:
  - Name of that NFT token
  - Owner address of that specific NFT
  - The image associated with the NFT
- User should be able to bookmark the NFT token they like
  - Use local storage to save the bookmark
  - User can see the items they bookmarked
  - User can remove their bookmarks
- The App layout can be a Single Screen with two Tabs.
  - One for showing all NFTS
  - The other for showing the bookmarked NFTs.

**Note**

Do not make another screen for DetailView when the user taps on the list item. ListView should be enough.

### How to run locally

#### Step 1: Clone the repo

```bash
git clone https://github.com/hrithik73/PushTask
```

#### Step 2: Install the dependencies by running

```bash
yarn
cd ios && pod install && cd ..
```

#### Step 3: Rename .env.example to .env and add your variables

```env
API_URL=YOUR_API_URL
TOKEN=YOUR_TOKEN
CONTRACT_ADDRESS=YOUR_CONTRACT_ADDRESS
```

#### Step 4: Run the App

```bash
yarn android
```

OR

```bash
yarn ios
```
