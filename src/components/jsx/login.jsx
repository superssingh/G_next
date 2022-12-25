import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { GoogleLogin } from "react-google-login"
import { GithubLogin } from "react-github-login"
import { TwitterLogin } from "react-twitter-login"
import Image from "next/legacy/image"

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userAvatarUrl, setUserAvatarUrl] = useState("")

  const onSuccess = (response) => {
    setIsLoggedIn(true)
    setUserName(response.profileObj.name)
  }

  const onFailure = (response) => {
    console.error(response)
  }

  if (isLoggedIn) {
    return <Redirect to="/comments" />
  }

  const onSuccessFromGoogle = (response) => {
    setIsLoggedIn(true)
    const { name, email, imageUrl } = response.profileObj
    setUserName(name)
    setUserEmail(email)
    setUserAvatarUrl(imageUrl)
  }

  const onSuccessFromGitHub = (response) => {
    setIsLoggedIn(true)
    const { name, email, avatar_url } = response.profileObj
    setUserName(name)
    setUserEmail(email)
    setUserAvatarUrl(avatar_url)
  }

  const onSuccessFromTwitter = (response) => {
    setIsLoggedIn(true)
    const { name, email, profile_image_url_https } = response.profileObj
    setUserName(name)
    setUserEmail(email)
    setUserAvatarUrl(profile_image_url_https)
  }

  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin
        clientId="246822428547-a6cmkm2ukoriiunqik92eiu6oof9oi0t.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={onSuccessFromGoogle}
        onFailure={onFailure}
      />
      <GithubLogin
        clientId="e9f6ca2c285a827199d2"
        redirectUri="http://localhost:3000/auth/github/callback"
        buttonText="Login with GitHub"
        onSuccess={onSuccessFromGitHub}
        onFailure={onFailure}
      />
      <TwitterLogin
        loginUrl="http://localhost:3000/auth/twitter"
        requestTokenUrl="http://localhost:3000/auth/twitter/reverse"
        buttonText="Login with Twitter"
        onSuccess={onSuccessFromTwitter}
        onFailure={onFailure}
      />
      <div className="p-4">
        <div>{userName}</div>
        <div>{userEmail}</div>
        <div className="w-20 h-20">
          <Image src={userAvatarUrl} layout="fill"></Image>
        </div>
      </div>
    </div>
  )
}

export default Login
