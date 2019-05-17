require 'rails_helper'

RSpec.describe Profile, type: :model do
  let(:profile) { create(:profile) }

  it { should have_secure_password }

  context "when valid username" do
    it { should validate_presence_of(:username) }
    it do
      should validate_length_of(:username)
      .is_at_least(3)
      .is_at_most(25)
    end

    it { expect(profile).to allow_value("johndoe").for(:username) }
  end

  context "when invalid username" do
    it { expect(profile).to_not allow_value("jo").for(:username) }
  end

  context "when valid email" do
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
    it { expect(profile).to allow_value("valid@email.com").for(:email) }
  end

  context "when invalid email" do
    it do
      expect(profile)
      .to_not allow_value("invalid@email")
      .for(:email)
      .with_message("format is invalid")
    end
  end

  context "when valid password" do
    it { should validate_presence_of(:password) }
  end
end
