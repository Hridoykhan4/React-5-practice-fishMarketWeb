
const search = () => {
    document.getElementById("search-box").addEventListener("keyup", (e) => {
        console.log(e.target.value);
      });
    
    
};

export {search}