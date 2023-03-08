export const getUserData = () => {
  try {
    new Promise((resolve) =>
      setTimeout(() => {
        const user = window.localStorage.getItem('user');
        resolve(user);
      }, 3000)
    );
  } catch (err) {
    new Promise((reject) =>
      setTimeout(() => {
        reject('Error');
      }, 3000)
    );
  }
};
