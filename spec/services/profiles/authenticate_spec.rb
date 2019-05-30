require 'rails_helper'

RSpec.describe Profiles::Authenticate, type: :service do

  describe "#new" do
    it { is_expected.to be_instance_of(Profiles::Authenticate) }
  end

  describe "#call" do
    let(:profile) {
      Profile.create(
        username: "John Doe",
        email: "johndoe@example.com",
        password: "password",
        password_confirmation: "password"
      )
    }

    context "with valid email and password" do
      subject(:auth) {
        Profiles::Authenticate.new(
          profile.email,
          profile.password
        )
      }

      it "returns a token" do
        token = auth.call
        expect(token).to be_instance_of(String)
      end

      it "returns a contains the profile" do
        auth.call
        expect(auth.profile).to eq(profile)
      end
    end

    context "with invalid credentials" do
      subject(:message) { Profiles::Authenticate.new().call }

      it "returns a message 'Invalid credentials'" do
        expect(message).to eq("Invalid credentials")
      end
    end
  end
end
