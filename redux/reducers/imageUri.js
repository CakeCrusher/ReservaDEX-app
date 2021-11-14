const imageUri = (state = {
  imageUri: 'https://knighthacks2021.blob.core.windows.net/images/6acc3bbe-08b6-481d-9762-8bb68716d055/637724666105172926.jpg?sv=2018-03-28&sr=b&sig=MsKdnpmmn157%2FBa06lCFjqpSTnbBIleRnTyP77IiCv0%3D&se=2021-11-14T06%3A18%3A30Z&sp=r'
}, action) => {
  switch (action.type) {
    case 'SET_IMAGE_URI':
      return {
        ...state,
        imageUri: action.imageUri
      };
    default:
      return state;
  }
}

export default imageUri