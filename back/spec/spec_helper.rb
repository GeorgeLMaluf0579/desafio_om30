# frozen_string_literal: true

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups

  begin
    # This allows you to limit a spec run to individual examples or groups
    # you care about by tagging them with `:focus` metadata. When nothing
    # is tagged with `:focus`, all examples get run. RSpec also provides
    # aliases for `it`, `describe`, and `context` that include `:focus`
    # metadata: `fit`, `fdescribe` and `fcontext`, respectively.
    # config.filter_run_when_matching :focus

    # Allows RSpec to persist some state between runs in order to support
    # the `--only-failures` and `--next-failure` CLI options. We recommend
    # you configure your source control system to ignore this file.
    # config.example_status_persistence_file_path = "spec/examples.txt"

    # Limits the available syntax to the non-monkey patched syntax that is
    # recommended. For more details, see:
    # https://rspec.info/features/3-12/rspec-core/configuration/zero-monkey-patching-mode/
    # config.disable_monkey_patching!

    # Many RSpec users commonly either run the entire suite or an individual
    # file, and it's useful to allow more verbose output when running an
    # individual spec file.
    # if config.files_to_run.one?
    #   config.default_formatter = "doc"
    # end

    # config.profile_examples = 10

    config.order = :random
    Kernel.srand config.seed
  end
end
