class Api::UsersController < ApplicationController
    
    def index
        @users = User.all

        render :index
    end
    
    def create
        @user = User.new(user_params)
        
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def add_to_user_decks 
        debugger
        @deck = Deck.find_by(id: params[:id])
        debugger
        # if current_user.decks.find_by(id: params[:id])
        #     render json: ["Deck is already assigned"]
        # else
        #     current_user.decks << @deck
        #     render :show
        # end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end
