//exe06
//index
import helloWorld from "/helloWorld.js";
import ambilDataUser from "/ambilDataUser.js";
import ambilDataUserAsnyc from "/ambilDataUserAsnyc.js";

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();
ambilDataUser();
ambilDataUserAsnyc();
