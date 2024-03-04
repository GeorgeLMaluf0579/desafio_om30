# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::CitizensController, type: :controller do
  describe 'GET #index' do
    before do
      create_list(:citizen, 10)
      get :index
    end

    it 'returns a successful response' do
      expect(response).to have_http_status(:ok)
    end

    it 'return the correct number of citizens' do
      expect(JSON.parse(response.body).size).to eq(10)
    end
  end
end