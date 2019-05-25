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

    context "with valid username and password" do
      subject(:token) {
        Profiles::Authenticate.new(
          username: profile.username,
          password: "password"
        )
        .call
      }

      it "returns a token" do
        expect(token).to be_instance_of(String)
      end
    end

    context "with valid email and password" do
      subject(:token) {
        Profiles::Authenticate.new(
          username: profile.email,
          password: "password"
        )
        .call
      }

      it "returns a token" do
        expect(token).to be_instance_of(String)
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
