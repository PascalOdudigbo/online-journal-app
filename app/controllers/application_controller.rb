class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  post "/login" do
    user = User.find_by(username: params[:username], password: params[:password])

    if user != nil
      user.to_json(only: [:id, :username, :email])
    else
      response = {response: "Invalid Username or Password"}
      response.to_json
    end

  end

  post "/create-account" do
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
      newUser.to_json(only: [:id, :username, :email])
    end
  end

  post "/forgot-password" do 
    user = User.find_by(email: params[:email])
    if user != nil
      user.to_json(only: [:id, :recovery_question, :answer])
    else
      response = {response: "This email isn't connected to any user account!"}
      response.to_json
    end
  end

  patch "/update-password/:id" do
    user = User.find(params[:id])
    if user != nil
      user.update(password: params[:password])
      user.to_json(only: [:id, :username, :email])
    end
  end

  get "/journal-list/:id" do
    user = User.find(params[:id])
    user.journals.order(created_at: :desc).to_json
  end

  post "/add-entry" do
    journal = Journal.create(title: params[:title], body: params[:body], user_id: params[:user_id])
    journal.to_json
  end

  put "/edit-entry/:id" do
    journal = Journal.find(params[:id])
    journal.update(title: params[:title], body: params[:body], user_id: params[:user_id])
    journal.to_json
  end

  delete "/delete-entry/:id" do
    journal = Journal.find(params[:id])
    journal.destroy
    journal.to_json
  end

end
