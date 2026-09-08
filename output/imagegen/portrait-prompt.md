# Portrait asset

- Asset: `public/alon-portrait.jpg`
- Tool: built-in `image_gen` (two editing passes), then JPEG encoding at quality 90 for web delivery.
- Input: user-supplied suit photographs and circular portrait style reference.

## Initial prompt

Use case: background-extraction / identity-preserve.
Asset type: transparent portrait cutout for a personal website, to be placed inside a blue circular frame using CSS.
Input images: Image 1 is only a STYLE/COMPOSITION reference showing another man in a turquoise circle. Images 2 and 3 are photographs of the actual subject, Alon, wearing a navy blue suit, white shirt and red pocket square. Image 3 (closer full body portrait, one hand hanging down) is the EDIT TARGET. Image 4 is a poor existing face crop of the same subject, supporting identity only; do not replicate its blur or crop.
Primary request: extract the real man from image 3 with clean natural hair and suit edges, remove ALL outdoor scenery, grass, trees and background. Preserve his exact recognizable face, smiling expression, hairline, beard, body proportions, navy suit, white shirt, red pocket square and original pose. Very gently correct the backlit exposure on the face for a clear natural photographic portrait. Do not beautify, redraw the face, alter age, change clothing, or add sunglasses.
Composition/framing: portrait canvas, centered from top of hair to mid thighs, both shoulders and arms entirely visible, small clear margin above the hair and at sides. Bottom edge straight at mid thighs, suitable for clipping to a circle. Actual transparent alpha background throughout, including between arms and torso; NO white or checkerboard rendered background. No circle, frame, shadow, glow, text, logo, or watermark baked into the asset. High quality photorealistic photo edit.

## Final prompt

Use case: precise-object-edit. Edit the attached portrait. Replace ONLY the entire gray/white checkerboard background with a completely solid uniform royal blue #2f6fed backdrop, including any checkerboard gaps between the arm and torso. The checkerboard is unwanted baked-in pixels: REMOVE ALL checkerboard. Keep the man exactly unchanged: same face, expression, hair, skin texture, pose, suit, white shirt, red pocket square. Produce a SQUARE 1024x1024 image for circular website cropping. Reframe by uniformly scaling the existing man down to show head through hips; top of hair at about 8% of the square height, face center near 27% of height, shoulders fully inside square, hips reach bottom edge. Center the person horizontally with blue breathing room to left and right, no stretching. Solid blue extends all the way to all four canvas edges. No circle, border, shadow, gradient, text, watermark, transparency or checkerboard. This is a faithful photo background replacement, do not redraw or beautify the person.

