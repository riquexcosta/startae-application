class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  require 'twitter'


  # GET /users
  def index
    @users = User.all

    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "Px07N9Wl2gq9yeIVrnordRkGy"
      config.consumer_secret     = "zOR8v1b7F7XdogY4i63KJOTQtoKlDOyEEK0CtMxEknyWsgmtdA"
      config.access_token        = "178920686-FWgyrdq9kiRbHyGHSiWqowdpmDVPYNZY9yG1l35D"
      config.access_token_secret = "eMEA8ZIgcvr6KnAw8B9PhDrLHqRfuliM0fscmJNqcZIMB"
    end
    @tweets = [];
    @users.each do |user|

      client.user_timeline(user.twitter, :result_type => "recent").take(1).collect do |tweet|
        "#{tweet.user.screen_name}: #{tweet.text}"
        puts(tweet.created_at);
        @tweets.push({ user: user.twitter, text: tweet.text });
      end
    end

    puts(@tweets);

    render json: { all_data: { users: @users, tweets: @tweets } }
  end

  # GET /users/1
  def show

    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "Px07N9Wl2gq9yeIVrnordRkGy"
      config.consumer_secret     = "zOR8v1b7F7XdogY4i63KJOTQtoKlDOyEEK0CtMxEknyWsgmtdA"
      config.access_token        = "178920686-FWgyrdq9kiRbHyGHSiWqowdpmDVPYNZY9yG1l35D"
      config.access_token_secret = "eMEA8ZIgcvr6KnAw8B9PhDrLHqRfuliM0fscmJNqcZIMB"
    end
    
    @tweets = []
  

    client.user_timeline(@user.twitter, :result_type => "recent").take(5).collect do |tweet|
      "#{tweet.user.screen_name}: #{tweet.text}"

      puts(tweet.created_at);
      @tweets.push({ text: tweet.text, date: tweet.created_at });
    end
    
    render json: { all_data: { user: @user, tweets: @tweets } }
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name, :twitter, :ocupation, :description)
    end
end
