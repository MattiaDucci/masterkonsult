module WithoutExtension
    def without_extension(input)
        input.split("/").last.split(".").first
    end
end

Liquid::Template.register_filter(WithoutExtension)