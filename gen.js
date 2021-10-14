import { PythonShell } from "python-shell";
import axios from "axios";



const ii = (n, r='') => {
  while (n--) r += String.fromCharCode((r=Math.random()*62|0, r+=r>9?(r<36?55:61):48));
  return r;
};

const register = async () => {
  const headers = {
    "Content-Type": "application/json",
  };
  let options = {
    args: ["ip addresses"],
  };

  PythonShell.run("bypass.py", options, async (err, [, captchaKey]) =>{
    let {
      data: [ token, password, username ]
    } = await axios.post("https://discord.com/api/v9/auth/register",{
      captcha_key: captchaKey,
      consent: true,
      date_of_birth: "1992-05-05",
      email: `${ii(8)}@gmail.com`,
      gift_code_sku_id: null,
      invite: null,
      password: `${ii(8)}`,
      username: `${ii(8)}`,
    }, 
    {headers}
    );
    console.log(token);

  });

};


register();
