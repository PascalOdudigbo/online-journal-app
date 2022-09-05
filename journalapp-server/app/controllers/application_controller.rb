class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  post "/login" do
    user = User.find_by(username: params[:username], password: params[:password])
    user.to_json
  end

  post "/createaccount" do
    existingUser = User.find_by(email: params[:email])

    if existingUser != nil
      response = {response: "User already Exists"}
      response.to_json
    else
      newUser = User.create(
        username: params[:username], 
        email: params[:email], 
        recovery_question: params[:recovery_question],
        answer: params[:answer], 
        password: params[:password]
      )
      newUser.to_json
    end
  end
end
