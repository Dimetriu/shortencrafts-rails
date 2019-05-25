require 'rails_helper'

RSpec.describe Profiles::Build, type: :service do

  context "when initialized" do

    describe "#new" do
      subject(:profile) { Profiles::Build.new }

      it "is a new build instance" do
        resource = profile.resource
        expect(resource).to be_a_new(Profile)
      end

      it "is not a new profile" do
        expect(profile).not_to be_a_new(Profile)
      end
    end
  end

  context "when persisting with valid attributes" do

    describe "#call" do
      attributes = {
        username: "johndoe",
        email: "johndoe@example.com",
        password: "password",
        password_confirmation: "password"
      }

      subject(:profile) { Profiles::Build.new(attributes) }

      it "saves an profile's instance" do
        profile.call

        expect(profile).not_to be_a_new(Profile)
      end

      it "contains a valid token" do
        profile.call
        token = profile.token

        expect(token).to be_instance_of(String)
      end
    end
  end

  context "when trying to persist with invalid attributes" do

    describe "#call" do
      attributes = {}

      subject(:profile) { Profiles::Build.new(attributes).call }

      it "contains errors" do
        errors = profile.errors.messages

        expect(errors).not_to be_falsy
      end

      it "returns hash of errors" do
        errors = profile.errors.messages

        expect(errors).to be_instance_of(Hash)
      end
    end
  end
end
