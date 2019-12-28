export const getAllUsers = async () => {
  const response = await fetch('https://node-pupdates-backend.herokuapp.com/api/v1/users');
  if (!response.ok) {
    throw Error('Failed to fetch users');
  }
  const users = await response.json();
  return users;
};

export const getSingleUser = async (userId) => {
  const response = await fetch(`https://node-pupdates-backend.herokuapp.com/api/v1/users/${userId}`)

  if (!response.ok) {
    throw Error('Failed to find user')
  }
  const user = await response.json()
  return user
}

export const getAllDogs = async () => {
  const response = await fetch('https://node-pupdates-backend.herokuapp.com/api/v1/dogs')
  if (!response.ok) {
    throw Error('Failed to fetch dogs')
  }
  const dogs = await response.json()
  return dogs;
}

export const getDogsForUser = async (userId) => {
  const response = await fetch(`https://node-pupdates-backend.herokuapp.com/api/v1/users/${userId}/dogs`)

  if (!response.ok) {
    throw Error(`Failed to retrieve user's dogs`)
  }
  const userDogs = await response.json()
  return userDogs
}

export const getAllDogImages = async () => {
  const response = await fetch('https://node-pupdates-backend.herokuapp.com/api/v1/dog_images')
  if (!response.ok) {
    throw Error('Failed to fetch images')
  }
  const dogImages = await response.json()
  return dogImages
}

export const getDogImagesById = async (dogId) => {
  const response = await fetch(`https://node-pupdates-backend.herokuapp.com/api/v1/dog_images/${dogId}`)

  if (!response.ok) {
    throw Error('Failed to fetch images for this dog')
  }
  const dogPics = await response.json()
  return dogPics
}


