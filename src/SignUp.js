import React, { useState, useEffect} from "react";
import { ThemeProvider, Div, Button, Modal, Icon, Text, Input } from "atomize";

function SignUpModal({ isOpen, onClose, props }) {
  const theme = {
    fontFamily: {
      primary: 'Bitter, serif',
      secondary: 'Oswald, serif',
      code: 'Raleway, san-serif'
    }
  }

  const [hidePassword, showPassword] = useState(false)
  const [submit, isSubmitting] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const registerUser = async (e) => {
    e.preventDefault()
    const url = "http://localhost:8000/api/v1/users/signup"
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          username: username,
          password: password,
          confirm_password: confirmPassword
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include",
      })
      if (response.status === 201) {
          alert("User Registered!")
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
    isSubmitting(true)
    setTimeout(() => {
      isSubmitting(false)
      onClose()
    }, 500)
  }

  return(
    <ThemeProvider>
      <Modal bg="black" fontFamily="primary" textColor="white" textSize="display1" align="center" isOpen={isOpen} onClose={onClose} rounded="0" minW="32rem" m="40rem">
        <Icon name="Cross" pos="absolute" top="1rem" right="1rem" size="16px" onClick={onClose} cursor="pointer"/>

      <Text textSize="display2" fontFamily="primary" textColor="white">
        SIGN UP
      </Text>

      <form onSubmit={registerUser} >
        <Div m="32px">
          <label for="name">Name</label>
          <Input id="name" onChange={handleChangeName} textSize="heading" type="text" value={name}/>
        </Div>
        <Div m="32px">
          <label for="username">Username</label>
          <Input id="username" onChange={handleChangeUsername} textSize="heading" type="text" value={username}/>
        </Div>
        <Div m="32px">
          <label for="email">Email</label>
          <Input id="email" onChange={handleChangeEmail} textSize="heading" type="text" value={email} />
        </Div>
        <Div m="32px">
          <label for="password">Password</label>
          <Input required id="password" onChange={handleChangePassword} textSize="heading" type={hidePassword ? "text" : "password"} value={password}
            suffix={
              <Button type="button" pos="absolute" onClick={() => showPassword(current => !current)} bg="transparent" w="3rem" top="0" right="0" rounded={{ r: "md" }}>
                <Icon name={hidePassword ? "EyeSolid" : "Eye"} color={hidePassword ? "danger800" : "success800"} size="16px"/>
              </Button>
            }
          />
        </Div>
        <Div m="32px">
          <label for="confirmPassword">Confirm Password</label>
          <Input required id="confirmPassword" onChange={handleChangeConfirmPassword} textSize="heading" type={hidePassword ? "text" : "password"} value={confirmPassword}
            suffix={
              <Button type="button" pos="absolute" onClick={() => showPassword(current => !current)} bg="transparent" w="3rem" top="0" right="0" rounded={{ r: "md" }}>
                <Icon name={hidePassword ? "EyeSolid" : "Eye"} color={hidePassword ? "danger800" : "success800"} size="16px"/>
              </Button>
            }
          />
        </Div>

        <Div d="flex" justify="flex-end">
          <Button onClick={onClose} fontFamily="primary" textSize="heading" p="2rem" bg="gray300" hoverBg="gray400" shadow="3" hoverShadow="4" textColor="black" m={{ r: "1rem" }}>
            Close
          </Button>
          <Button type="submit" isLoading={submit} onClick={onClickSubmit} fontFamily="primary" textSize="heading" p="2rem" bg={submit ? "danger500" : "danger800"} hoverBg="danger700" shadow="3" hoverShadow="4">
            Sign Up
          </Button>
        </Div>
      </form>
    </Modal>
  </ThemeProvider>

  )
}

export default SignUpModal;
