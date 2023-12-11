import { fetchUserAttributes } from 'aws-amplify/auth';


export async function handleFetchUserAttributes() {
  try {
    const userAttributes = await fetchUserAttributes();
    const email = await userAttributes.email;
    return email;
  } catch (error) {
    console.log(error);
  }
}
