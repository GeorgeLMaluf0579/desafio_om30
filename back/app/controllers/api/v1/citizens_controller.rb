# frozen_string_literal: true

module Api
  module V1
    class CitizensController < ApplicationController
      def index
        offset = (params[:offset] || 0).to_i
        limit = (params[:limit] || DEFAULT_PAGE_SIZE).to_i
        query = params[:query] || '*'
        citizens = Citizen.search(query, limit: limit, offset: offset)
        render json: {
                      total: citizens.total_count,
                      limit: limit,
                      offset: offset,
                      citizens: citizens.to_a
                     }, status: :ok
      end
    end
  end
end