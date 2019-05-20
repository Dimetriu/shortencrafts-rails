class BaseBuild
  attr_reader :resource
  # Resource must be a Model class
  # e.g: BaseBuild.new(User, username: "user1")
  def initialize(resource = nil, **options)
    @resource = resource.new(**options)
  end

  def call
    # ensure to call super in Children classes
    # to perform the persistance
    resource.valid? && resource.save || resource.errors.messages
  end

  def self.call(resource, **options)
    # specify only Resource class and call super
    self.new(resource, **options).call
  end

  def errors
    @errors = resource.valid? || resource.errors.messages
  end
end
