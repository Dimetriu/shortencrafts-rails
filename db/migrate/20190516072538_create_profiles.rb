class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|

      t.string :username,
        null: false,
        default: ''

      t.string :email,
        null: false,
        default: ''

      t.index :username, unique: true
      t.index :email, unique: true

      t.string :password_digest,
        null: false,
        default: ''

      t.uuid :verification_token,
        null: false,
        default: SecureRandom.uuid

      t.datetime :confirmed_at

      t.timestamps
    end
  end
end
