# frozen_string_literal: true

module Api
  module V1
    class CitizensController < ApplicationController
      def index
        @citizens = Citizen.all
        render json: @citizens, status: :ok
      end
    end
  end
end