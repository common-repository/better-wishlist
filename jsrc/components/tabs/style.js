const { __ } = wp.i18n;

const { BaseControl, RangeControl, SelectControl, TextControl } = wp.components;

const { Component, Fragment } = wp.element;

import Color from "./../controls/color";

class StyleSettings extends Component {
	constructor() {
		super(...arguments);
	}

	updateValue(value) {
		this.props.onChange(value);
	}

	render() {
		const { state } = this.props;

		return (
			<Fragment>

				<h3>{__("Add to Wishlist Button")}</h3>

				<BaseControl id="wishlist-button-style" label="Style">
					<SelectControl
						value={state.wishlist_button_style}
						onChange={(newValue) => {
							this.updateValue({
								wishlist_button_style: newValue,
							});
						}}
						options={[
							{ value: "default", label: "Theme Default" },
							{ value: "custom", label: "Custom" },
						]}
					/>
				</BaseControl>

				{state.wishlist_button_style == "custom" && (
					<div className="wishlist-button-custom-style-wrap">
						<BaseControl
							id="wishlist-button-width"
							label="Button Width">
							<RangeControl
								value={parseInt(state.wishlist_button_width)}
								min={0}
								max={300}
								onChange={(newValue) => {
									this.updateValue({
										wishlist_button_width: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="add-to-wishlist-fontsize"
							label="Font Size">
							<TextControl
								value={this.htmlDecode(state.wishlist_button_fontsize)}
								onChange={(value) =>
									this.updateValue({
										wishlist_button_fontsize: value,
									})
								}
							/>

						</BaseControl>

						<BaseControl
							id="wishlist-button-font-style"
							label="Font Style">
							<SelectControl
								value={state.wishlist_button_font_style}
								onChange={(newValue) => {
									this.updateValue({
										wishlist_button_font_style: newValue,
									});
								}}
								options={[
									{ value: "initial", label: "Initial" },
									{ value: "normal", label: "Normal" },
									{ value: "italic", label: "Italic" },
									{ value: "oblique", label: "Oblique" },
								]}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-color"
							label="Color"
							className="custom-color-control">
							<Color
								value={state.wishlist_button_color}
								onChange={(newValue) => {
									this.updateValue({
										wishlist_button_color: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-bg-color"
							label="Background Color">
							<Color
								value={state.wishlist_button_background}
								onChange={(newValue) => {
									this.updateValue({
										wishlist_button_background: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-color-hover"
							label="Color(hover)">
							<Color
								value={state.wishlist_button_hover_color}
								onChange={(newValue) => {
									this.updateValue({
										wishlist_button_hover_color: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-bg-color-hover"
							label="Background Color(hover)">
							<Color
								value={state.wishlist_button_hover_background}
								onChange={(newValue) => {
									this.updateValue({
										wishlist_button_hover_background: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-border-style"
							label="Border">
							<SelectControl
								value={state.wishlist_button_border_style}
								onChange={(newValue) => {
									this.updateValue({
										wishlist_button_border_style: newValue,
									});
								}}
								options={[
									{ value: "none", label: "None" },
									{ value: "solid", label: "Solid" },
									{ value: "dashed", label: "Dashed" },
									{ value: "dotted", label: "Dotted" },
								]}
							/>
						</BaseControl>

						{state.wishlist_button_border_style != "none" && (
							<Fragment>
								<BaseControl
									id="wishlist-button-border-width"
									label="Border Width">
									<RangeControl
										value={parseInt(
											state.wishlist_button_border_width
										)}
										min={0}
										max={10}
										onChange={(newValue) => {
											this.updateValue({
												wishlist_button_border_width: newValue,
											});
										}}
									/>
								</BaseControl>

								<BaseControl
									id="wishlist-button-border-color"
									label="Border Color">
									<Color
										value={
											state.wishlist_button_border_color
										}
										onChange={(newValue) => {
											this.updateValue({
												wishlist_button_border_color: newValue,
											});
										}}
									/>
								</BaseControl>

								<BaseControl
									id="wishlist-button-border-radius"
									label="Border Radius">
									<RangeControl
										value={parseInt(
											state.wishlist_button_border_radius
										)}
										min={0}
										max={20}
										onChange={(newValue) => {
											this.updateValue({
												wishlist_button_border_radius: newValue,
											});
										}}
									/>
								</BaseControl>
							</Fragment>
						)}

						<BaseControl
							id="wishlist-button-padding-top"
							label="Padding Top">
							<RangeControl
								value={parseInt(
									state.wishlist_button_padding_top
								)}
								min={0}
								max={100}
								onChange={(newValue) => {
									this.updateValue({
										wishlist_button_padding_top: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-padding-right"
							label="Padding Right">
							<RangeControl
								value={parseInt(
									state.wishlist_button_padding_right
								)}
								min={0}
								max={100}
								onChange={(newValue) => {
									this.updateValue({
										wishlist_button_padding_right: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-padding-bottom"
							label="Padding Bottom">
							<RangeControl
								value={parseInt(
									state.wishlist_button_padding_bottom
								)}
								min={0}
								max={100}
								onChange={(newValue) => {
									this.updateValue({
										wishlist_button_padding_bottom: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-padding-left"
							label="Padding Left">
							<RangeControl
								value={parseInt(
									state.wishlist_button_padding_left
								)}
								min={0}
								max={100}
								onChange={(newValue) => {
									this.updateValue({
										wishlist_button_padding_left: newValue,
									});
								}}
							/>
						</BaseControl>
					</div>
				)}

				<h3>{__("Added to Wishlist Button")}</h3>

				<div className="wishlist-button-custom-style-wrap">
					<BaseControl
						id="wishlisted-button-color"
						label="Color">
						<Color
							value={state.wishlisted_button_color}
							onChange={(newValue) => {
								this.updateValue({
									wishlisted_button_color: newValue,
								});
							}}
						/>
					</BaseControl>

					<BaseControl
						id="wishlisted-button-bg-color"
						label="Background Color">
						<Color
							value={state.wishlisted_button_bg}
							onChange={(newValue) => {
								this.updateValue({
									wishlisted_button_bg: newValue,
								});
							}}
						/>
					</BaseControl>

					<BaseControl
						id="wishlisted-button-hover-color"
						label="Color (Hover)">
						<Color
							value={state.wishlisted_button_hover_color}
							onChange={(newValue) => {
								this.updateValue({
									wishlisted_button_hover_color: newValue,
								});
							}}
						/>
					</BaseControl>

					<BaseControl
						id="wishlisted-button-bg-color"
						label="Background Color (Hover)">
						<Color
							value={state.wishlisted_button_hover_bg}
							onChange={(newValue) => {
								this.updateValue({
									wishlisted_button_hover_bg: newValue,
								});
							}}
						/>
					</BaseControl>
				</div>

				<h3>{__("Cart Button")}</h3>

				<BaseControl id="wishlist-button-style" label="Style">
					<SelectControl
						value={state.cart_button_style}
						onChange={(newValue) => {
							this.updateValue({
								cart_button_style: newValue,
							});
						}}
						options={[
							{ value: "default", label: "Theme Default" },
							{ value: "custom", label: "Custom" },
						]}
					/>
				</BaseControl>

				{state.cart_button_style == "custom" && (
					<div className="addtocart-button-custom-style-wrap">
						<BaseControl
							id="add-to-cart-fontsize"
							label="Font Size">
							<TextControl
								value={this.htmlDecode(state.cart_button_fontsize)}
								onChange={(value) =>
									this.updateValue({
										cart_button_fontsize: value,
									})
								}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-font-style"
							label="Font Style">
							<SelectControl
								value={state.cart_button_font_style}
								onChange={(newValue) => {
									this.updateValue({
										cart_button_font_style: newValue,
									});
								}}
								options={[
									{ value: "initial", label: "Initial" },
									{ value: "normal", label: "Normal" },
									{ value: "italic", label: "Italic" },
									{ value: "oblique", label: "Oblique" },
								]}
							/>
						</BaseControl>

						<BaseControl id="wishlist-button-color" label="Color">
							<Color
								value={state.cart_button_color}
								onChange={(newValue) => {
									this.updateValue({
										cart_button_color: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-bg-color"
							label="Background Color">
							<Color
								value={state.cart_button_background}
								onChange={(newValue) => {
									this.updateValue({
										cart_button_background: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-color-hover"
							label="Color (hover)">
							<Color
								value={state.cart_button_hover_color}
								onChange={(newValue) => {
									this.updateValue({
										cart_button_hover_color: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-bg-color-hover"
							label="Background Color (hover)">
							<Color
								value={state.cart_button_hover_background}
								onChange={(newValue) => {
									this.updateValue({
										cart_button_hover_background: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-border-style"
							label="Border">
							<SelectControl
								value={state.cart_button_border_style}
								onChange={(newValue) => {
									this.updateValue({
										cart_button_border_style: newValue,
									});
								}}
								options={[
									{ value: "none", label: "None" },
									{ value: "solid", label: "Solid" },
									{ value: "dashed", label: "Dashed" },
									{ value: "dotted", label: "Dotted" },
								]}
							/>
						</BaseControl>

						{state.cart_button_border_style != "none" && (
							<Fragment>
								<BaseControl
									id="wishlist-button-border-width"
									label="Border Width">
									<RangeControl
										value={parseInt(
											state.cart_button_border_width
										)}
										min={0}
										max={10}
										onChange={(newValue) => {
											this.updateValue({
												cart_button_border_width: newValue,
											});
										}}
									/>
								</BaseControl>

								<BaseControl
									id="wishlist-button-border-color"
									label="Border Color">
									<Color
										value={state.cart_button_border_color}
										onChange={(newValue) => {
											this.updateValue({
												cart_button_border_color: newValue,
											});
										}}
									/>
								</BaseControl>

								<BaseControl
									id="wishlist-button-border-radius"
									label="Border Radius">
									<RangeControl
										value={parseInt(
											state.cart_button_border_radius
										)}
										min={0}
										max={20}
										onChange={(newValue) => {
											this.updateValue({
												cart_button_border_radius: newValue,
											});
										}}
									/>
								</BaseControl>
							</Fragment>
						)}

						<BaseControl
							id="wishlist-button-padding-top"
							label="Padding Top">
							<RangeControl
								value={parseInt(state.cart_button_padding_top)}
								min={0}
								max={100}
								onChange={(newValue) => {
									this.updateValue({
										cart_button_padding_top: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-padding-right"
							label="Padding Right">
							<RangeControl
								value={parseInt(
									state.cart_button_padding_right
								)}
								min={0}
								max={100}
								onChange={(newValue) => {
									this.updateValue({
										cart_button_padding_right: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-padding-bottom"
							label="Padding Bottom">
							<RangeControl
								value={parseInt(
									state.cart_button_padding_bottom
								)}
								min={0}
								max={100}
								onChange={(newValue) => {
									this.updateValue({
										cart_button_padding_bottom: newValue,
									});
								}}
							/>
						</BaseControl>

						<BaseControl
							id="wishlist-button-padding-left"
							label="Padding Left">
							<RangeControl
								value={parseInt(state.cart_button_padding_left)}
								min={0}
								max={100}
								onChange={(newValue) => {
									this.updateValue({
										cart_button_padding_left: newValue,
									});
								}}
							/>
						</BaseControl>
					</div>
				)}
			</Fragment>
		);
	}
	htmlDecode(text){
		return  (new DOMParser().parseFromString(text, "text/html")).documentElement.textContent;
	}
}

export default StyleSettings;
