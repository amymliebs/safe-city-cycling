class Api::V1::CitiesController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    render json: City.all
  end
end
