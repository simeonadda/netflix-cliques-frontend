import React, { useState } from "react";
import { Div, Button, SideDrawer, Icon, Text, Input, Anchor } from "atomize";

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8000';
} else {
  baseURL = 'https://netflix-cliques-be.herokuapp.com';
}

function LoginSideDrawer({ isOpen, onClose, userAuthHandler}) {
  const [hidePassword, showPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeUser, setActiveUser] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const checkActiveUser = () => {
    setActiveUser(!activeUser)
  }

  const loginUser = async (e) => {
    e.preventDefault()
    const url = baseURL + "/api/v1/users/login"
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include",
      })
      if (response.status === 200) {
        userAuthHandler(true)
      } else {
        response.json().then((data) => {
          console.log(data);
        })
      }
    }
    catch(err) {
      console.log('Error =>', err);
    }
  }


  const onClickSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      onClose()
    }, 600);
  }

  return(
    <SideDrawer isOpen={isOpen} onClose={onClose} bg="black" w={{ xs: "100vw", md: "24rem"}}>
      <Div d="flex" m="4rem" justify="space-around">
        <Text textSize="display1" fontFamily="code" textColor="white">Sign In</Text>
      </Div>
      <form onSubmit={loginUser}>
        <Div m="32px">
          <Input required id="email" onChange={handleChangeEmail} placeholder="Email" textSize="heading" type="text" value={email}/>
        </Div>

        <Div m="32px">
          <Input required id="password" onChange={handleChangePassword} placeholder="Password" textSize="heading" type={hidePassword ? "text" : "password"} value={password}
            suffix={
              <Button type="button" pos="absolute" onClick={() => showPassword(current => !current)} bg="transparent" w="3rem" top="0" right="0" rounded={{ r: "md" }}>
                <Icon name={hidePassword ? "EyeSolid" : "Eye"} color={hidePassword ? "danger800" : "success800"} size="16px"/>
              </Button>
            }
          />
        </Div>

        <Div d="flex" justify="flex-end">
          <Button onClick={onClose} fontFamily="secondary" textSize="title" p="2rem" bg="gray300" hoverBg="gray600" shadow="3" hoverShadow="4" textColor="black" m={{ r: "1rem" }}>
            Cancel
          </Button>
          <Button type="submit" isLoading={isSubmitting} onClick={onClickSubmit} fontFamily="secondary" textSize="title" p="2rem" bg={isSubmitting ? "danger400" : "danger800"} hoverBg="danger700" shadow="3" hoverShadow="4">
            Sign In
          </Button>
        </Div>
      </form>
    </SideDrawer>
  )
}

export default LoginSideDrawer;
