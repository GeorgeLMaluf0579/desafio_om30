class Citizen < ApplicationRecord
  searchkick word_start: %i[full_name cpf cns]

  enum status: %i[active unactive]
  validates :full_name, :cpf, :cns, :email, :birth_date, :phone, :status, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, 
                              message: "must be a valid email address" }
  validates :cns, presence: true, length: { is: 15 }, format: { with: /\A\d{15}\z/ }
  validate :validate_birth_date

  private

  def validate_birth_date
    if birth_date.blank? || (birth_date.present? && !birth_date.is_a?(Date))
      errors.add(:birth_date, "must be a valid date")
    end
    if birth_date.present? && birth_date.future?
      errors.add(:birth_date, "can't be in the future")
    end
  end
end
