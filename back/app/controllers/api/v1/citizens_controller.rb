# frozen_string_literal: true

module Api
  module V1
    class CitizensController < ApplicationController
      before_action :set_citizen, only: %i[show update]

      def index
        offset = (params[:offset] || 0).to_i
        limit = (params[:limit] || DEFAULT_PAGE_SIZE).to_i
        query = params[:query] || '*'
        order = { full_name: :asc}
        citizens = Citizen.search(query, fields: %i[full_name cpf cns],
                                  match: :word_start, limit: limit, offset: offset, order: order)
        render json: {
                      total: citizens.total_count,
                      limit: limit,
                      offset: offset,
                      citizens: citizens.to_a
                     }, status: :ok
      end

      def create
        @citizen = Citizen.new(citizen_params)

        if @citizen.save
          render json: @citizen, status: :created
        else
          render json: @citizen.errors, status: :unprocessable_entity
        end
      end

      def show
        render json: @citizen, include: 'address' , status: :ok
      end

      def update
        byebug
        if @citizen.update(citizen_params)
          render json: @citizen, status: :ok
        else
          render json: @citizen.errors, status: :unprocessable_entity
        end
      end

      private

      def set_citizen
        @citizen = Citizen.find(params[:id])
      end

      def citizen_params
        data = params.require(:citizen).permit(
          :id,
          :full_name,
          :cpf,
          :cns,
          :email,
          :birth_date,
          :phone,
          :status,
          address_attributes: [
            :id,
            :street,
            :complement,
            :building_number,
            :neighborhood,
            :zip_code,
            :city,
            :state,
            :ibge_code
          ]
        )
      end

    end
  end
end