# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::CitizensController, type: :controller do
  let(:valid_attributes) do
    {
      "id": 8,
      "full_name": "Conchita Anderson",
      "cpf": "54421537741",
      "cns": "245241581912019",
      "email": "norine_shields@wilderman.test",
      "birth_date": "1974-10-14",
      "phone": "1-744-963-9161",
      "status": "active",
      "address_attributes": {
        "id": 8,
        "street": "Thompson Harbors",
        "building_number": "783",
        "neighborhood": "Summer Pointe",
        "complement": "17153 Karol Junction",
        "zip_code": "31265",
        "city": "Rosiaside",
        "state": "PR",
        "ibge_code": "3042529"
      }
    }
  end

  describe 'GET #index' do
    it 'returns a success response' do
      allow(Citizen).to receive(:search).and_return(double('search_result', total_count: 1, to_a: [valid_attributes]))
      get :index, params: { format: :json }
      expect(response).to be_successful
    end
  end

  describe 'PUT #update' do
    let(:citizen) { create(:citizen) }

    context 'with valid parameters' do
      it 'updates the requested citizen' do
        allow(Citizen).to receive(:find).and_return(citizen)
        allow_any_instance_of(Citizen).to receive(:update).and_return(true)
        put :update, params: { id: citizen.to_param, citizen: valid_attributes, format: :json }
        expect(response).to have_http_status(:ok)
      end
    end

    context 'with invalid parameters' do
      it 'returns unprocessable_entity status' do
        allow(Citizen).to receive(:find).and_return(citizen)
        allow_any_instance_of(Citizen).to receive(:update).and_return(false)
        put :update, params: { id: citizen.to_param, citizen: { invalid: 'data' }, format: :json }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end