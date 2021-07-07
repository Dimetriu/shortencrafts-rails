require 'rails_helper'

RSpec.describe AuthorizeApiRequest, type: :service do
  let(:profile) { create(:profile) }

  describe "#call" do

    context "when token is valid" do

      it "returns a profile" do
        token = JsonWebToken.encode(profile_id: profile.id)
        request = AuthorizeApiRequest.call(token)
        request_id = request.id
        profile_id = profile.id

        expect(request_id).to eq(profile_id)
      end

    end

    context "when token is invalid" do

      it "returns nil" do
        token = "invalid_token"
        request = AuthorizeApiRequest.call(token)

        expect(request).to be_nil
      end

    end
  end
end
