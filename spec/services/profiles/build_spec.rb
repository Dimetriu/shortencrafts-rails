require 'rails_helper'

RSpec.describe Profiles::Build, type: :service do
  with_valid_attributes = {
    username: "johndoe",
    email: "johndoe@example.com",
    password: "password",
    password_confirmation: "password"
  }

  with_invalid_attributes = {}

  def build_profile(attributes)
    Profiles::Build.new(attributes).call
  end

  context "when valid attributes provided" do
    it "returns a token" do
      token = build_profile with_valid_attributes

      expect(token).to be_instance_of(String)
    end
  end

  context "when invalid attributes provided" do
    it "returns a hash of errors" do
      errors = build_profile with_invalid_attributes

      expect(errors).to be_instance_of(Hash)
    end
  end
end
