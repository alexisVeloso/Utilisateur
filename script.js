const searchForm = document.getElementById("searchForm");
const usernameInput = document.getElementById("username");
const userInfoDiv = document.getElementById("userInfo");

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = usernameInput.value.trim();

    async function userInfoDiv(names) {
        let jobs = [];
      
        for(let name of names) {
          let job = fetch(`https://api.github.com/users/${name}`).then(
            successResponse => {
              if (successResponse.status != 200) {
                return null;
              } else {
                return successResponse.json();
              }
            },
            failResponse => {
              return null;
            }
          );
          jobs.push(job);
        }
      
        let results = await Promise.all(jobs);
      
        return results;
      }
});
